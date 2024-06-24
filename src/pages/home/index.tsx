import { Fragment, ReactElement, useContext, useEffect } from 'react'
import Head from 'next/head'
import { AuthContext } from '@/contexts/AuthContext'
import NavBar from '@/components/NavBar/NavBar'
import HomeLayout from '@/components/layout/HomeLayout'

const HomePage = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      {/* <NavBar navigation={navigation} profile={profile} /> */}

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}
            <h1>Bem-vindo(a) ao Sistema de Alunos</h1>
          </div>
        </div>
      </main>
    </div>
  )
}

HomePage.getLayout = (page: React.ReactNode) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default HomePage;
