import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HomeLayout from '@/components/layout/HomeLayout';
import Form from './form';
import { createStudent } from '@/services/students';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const NewAlunoPage = () => {
  async function handleSubmit(formData: any) {
    await createStudent(formData)
    .then(async (res: any) =>{
      const router = useRouter();
      await toast.success("Aluno cadastrado com sucesso!")
      router.push('/alunos');
      return res.data
    })
    .catch(async (error: any) => {  
        await toast.error("Erro ao cadastrar usuário")
        return error
    })

  };

  return (
    <div>
      <Head>
        <title>Cadastrar Aluno</title>
      </Head>
      
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8  flex flex-row justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Cadastrar Alunos</h1>
          <Link href="/alunos">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150">
              Voltar para Tabela
            </button>
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Form onSubmit={handleSubmit} />
            <p>*Matrícula deve ter 8 números</p>
          </div>
        </div>
      </main>
    </div>
  );
};

NewAlunoPage.getLayout = (page: React.ReactNode) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default NewAlunoPage;
