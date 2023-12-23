import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { DataGrid, GridColumns } from '@mui/x-data-grid'
import axios from 'axios'
import CogOutline from 'mdi-material-ui/CogOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import Laptop from 'mdi-material-ui/Laptop'
import Link from 'next/link'
import { Fragment, MouseEvent, ReactElement, useCallback, useEffect, useState } from 'react'

import CustomAvatar from 'src/@core/components/mui/avatar'
import { getInitials } from 'src/@core/utils/get-initials'
import { User } from 'src/types/common/user.type'
import TableHeader from 'src/views/apps/user/list/TableHeader'

interface UserRoleType {
  [key: string]: ReactElement
}

// ** Vars
const userRoleObj: UserRoleType = {
  admin: <Laptop sx={{ mr: 2, color: 'error.main' }} />,
  user: <CogOutline sx={{ mr: 2, color: 'warning.main' }} />

  // editor: <PencilOutline sx={{ mr: 2, color: 'info.main' }} />,
  // maintainer: <ChartDonut sx={{ mr: 2, color: 'success.main' }} />,
  // subscriber: <AccountOutline sx={{ mr: 2, color: 'primary.main' }} />
}

const AvatarWithoutImageLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginRight: theme.spacing(3)
}))

const renderClient = (row: User) => {
  return (
    <AvatarWithoutImageLink href={`/apps/user/${row.id}`}>
      <CustomAvatar skin='light' color={'primary'} sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}>
        {getInitials(row.username ? row.username : 'John Doe')}
      </CustomAvatar>
    </AvatarWithoutImageLink>
  )
}

const MenuItemLink = styled('a')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  padding: theme.spacing(1.5, 4),
  color: theme.palette.text.primary
}))

const RowOptions = ({ id }: { id: number | string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    handleRowOptionsClose()
  }

  return (
    <Fragment>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <DotsVertical />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem sx={{ p: 0 }}>
          <Link href={`/apps/user/${id}`} passHref>
            <MenuItemLink>
              <EyeOutline fontSize='small' sx={{ mr: 2 }} />
              View
            </MenuItemLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteOutline fontSize='small' sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

const columns: GridColumns<User> = [
  {
    flex: 0.1,
    minWidth: 200,
    field: 'username',
    headerName: 'User',
    renderCell: ({ row }) => {
      const { id, username } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(row)}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Link href={`/apps/user/${id}`} passHref>
              <Typography noWrap component='a' variant='caption' sx={{ textDecoration: 'none' }}>
                {username}
              </Typography>
            </Link>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 250,
    field: 'email',
    headerName: 'Email',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant='body2'>
          {row.email}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    field: 'role',
    minWidth: 150,
    headerName: 'Role',
    renderCell: ({ row }) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {userRoleObj[row.role]}
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.role}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 200,
    sortable: false,
    field: '',
    headerName: 'Actions',
    renderCell: ({ row }) => <RowOptions id={row.id} />
  }
]

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserListProps {}

const UserList = ({}: UserListProps) => {
  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)

  const [users, setUsers] = useState<Array<User>>([])

  useEffect(() => {
    const handleGetAllUser = async () => {
      const { data: users } = await axios.get<User[]>('http://127.0.0.1:5000/api/user/all')
      setUsers(users)
    }
    handleGetAllUser()
  }, [])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader value={value} handleFilter={handleFilter} />
          <DataGrid
            autoHeight
            rows={users}
            columns={columns}
            checkboxSelection
            pageSize={pageSize}
            disableSelectionOnClick
            rowsPerPageOptions={[10, 25, 50]}
            sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
            onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserList
