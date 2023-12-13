// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

// ** Types
import { Article } from 'src/types/common/article.type'

// ** Demo Component Imports

interface UserViewOverviewProps {
  articles: Article[]
}

const UserViewOverview = ({ articles }: UserViewOverviewProps) => {
  return (
    <Fragment>
      <Card sx={{ mb: 6 }}>
        <CardHeader title='Project List' titleTypographyProps={{ variant: 'h6' }} />

        <Divider sx={{ m: 0 }} />

        <TableContainer>
          <Table size='small' sx={{ minWidth: 500 }}>
            <TableHead sx={{ backgroundColor: 'customColors.tableHeaderBg' }}>
              <TableRow>
                <TableCell sx={{ height: '3.375rem' }}>Posts</TableCell>
                <TableCell sx={{ height: '3.375rem' }}>Total Like</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {articles.map((item, index: number) => (
                <TableRow hover key={index} sx={{ '&:last-of-type td': { border: 0 } }}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Stack>
                        <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                          {item.title}
                        </Typography>
                        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                          {item.description}
                        </Typography>
                      </Stack>
                    </Box>
                  </TableCell>
                  <TableCell>{item.likes ? item.likes.length : 0}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Fragment>
  )
}

export default UserViewOverview
