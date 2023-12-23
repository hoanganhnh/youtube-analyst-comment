import { Fragment } from 'react'
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
import { Link as MuiLink } from '@mui/material'

import CustomAvatar from 'src/@core/components/mui/avatar'

interface UserViewOverviewProps {
  histories: Array<any>
}

const UserViewOverview = ({ histories }: UserViewOverviewProps) => {
  console.log(histories)

  return (
    <Fragment>
      <Card sx={{ mb: 6 }}>
        <CardHeader title='Video List' titleTypographyProps={{ variant: 'h6' }} />

        <Divider sx={{ m: 0 }} />

        <TableContainer>
          <Table size='small' sx={{ minWidth: 500 }}>
            <TableHead sx={{ backgroundColor: 'customColors.tableHeaderBg' }}>
              <TableRow>
                <TableCell sx={{ height: '3.375rem' }}>Channel Name</TableCell>
                <TableCell sx={{ height: '3.375rem' }}>Video Link</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {histories.map((item, index: number) => (
                <TableRow hover key={index} sx={{ '&:last-of-type td': { border: 0 } }}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Stack direction='row' alignItems='center'>
                        <CustomAvatar
                          alt='channel_name'
                          src={item.video_thumbnail_url}
                          variant='circular'
                          sx={{ width: 60, height: 60, m: 2 }}
                        />
                        <Box>
                          <MuiLink href={item.channel_url} target='_blank' rel='noopener noreferrer'>
                            <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                              {item.channel_name}
                            </Typography>
                          </MuiLink>

                          <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                            {item.video_title}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <a href={item.video_url} target='_blank' rel='noopener noreferrer'>
                      Link
                    </a>
                  </TableCell>
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
