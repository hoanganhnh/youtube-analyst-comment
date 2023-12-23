import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types'

import UserViewPage from 'src/views/apps/user/view/UserViewPage'

const UserView = ({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <UserViewPage id={id} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  return {
    props: {
      id: params?.id
    }
  }
}

export default UserView
