import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import axios from 'axios'

import type { UserLayoutType, UsersType } from 'src/types/apps/userTypes'
import UserViewLeft from 'src/views/apps/user/view/UserViewLeft'
import UserViewRight from 'src/views/apps/user/view/UserViewRight'

type Props = UserLayoutType

const UserView = ({ id, articles }: Props) => {
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<null | UsersType>(null)

  useEffect(() => {
    axios
      .get('/apps/user', { params: { id } })
      .then(response => {
        setData(response.data)
        setError(false)
      })
      .catch(() => {
        setData(null)
        setError(true)
      })
  }, [id])

  if (data) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} md={5} lg={4}>
          <UserViewLeft data={data} />
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <UserViewRight articles={articles} />
        </Grid>
      </Grid>
    )
  } else if (error) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity='error'>
            User with the id: {id} does not exist. Please check the list of users:{' '}
            <Link href='/apps/user/list'>User List</Link>
          </Alert>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default UserView
