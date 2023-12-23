import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import axios from 'axios'

import UserViewLeft from 'src/views/apps/user/view/UserViewLeft'
import UserViewRight from './UserViewRight'
import { User } from 'src/types/common/user.type'

type Props = {
  id: string
}

const UserView = ({ id }: Props) => {
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<null | User>(null)
  const [histories, setHistories] = useState([])

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/api/user/${id} `)
      .then(response => {
        setData(response.data)
        setError(false)
      })
      .catch(() => {
        setData(null)
        setError(true)
      })
  }, [id])

  useEffect(() => {
    const handleGetMyHistory = async () => {
      const { data: histories } = await axios.post('http://127.0.0.1:5000/api/history/find-by-user-id', {
        userId: id
      })

      setHistories(histories)
    }
    handleGetMyHistory()
  }, [id])

  if (data) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12} md={5} lg={4}>
          <UserViewLeft data={data} histories={histories} />
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <UserViewRight histories={histories} />
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
