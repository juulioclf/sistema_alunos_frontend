import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { AuthContext } from '@/contexts/AuthContext';
import HomeLayout from '@/components/layout/HomeLayout';
import Table from '@/components/table/Table';
import Link from 'next/link';
import EditModal from '@/components/modal/EditModal';
import DeleteModal from '@/components/modal/DeleteModal';
import { useQuery } from 'react-query';
import { StudentData } from '@/types/student';
import { deleteStudent, getAllStudents } from '@/services/students';
import { toast } from 'react-toastify';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState<StudentData | null>(null);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);

  const { data: studentsData, isLoading, error } = useQuery<StudentData>('students', getAllStudents);

  useEffect(() => {
    if (studentsData) {
      setData(studentsData);
    }
  }, [studentsData]);

  const handleOpenEditModal = (id: string) => {
    setEditItemId(id);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditItemId(null);
    setEditModalOpen(false);
  };

  const handleOpenDeleteModal = (id: string) => {
    setDeleteItemId(id);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteItemId(null);
    setDeleteModalOpen(false);
  };

  const handleDeleteItem = (id: string) => {
    deleteStudent(id)
    .then((res: any) => {
      toast.success("Aluno excluído")
    })
    .catch((error: any) => {
      toast.error("Erro ao excluir aluno")
    })

    if (data) {
      setData((prevData: any) => ({
        ...prevData,
        students: prevData.students.filter((item: any) => item.id !== id),
      }));
    }
    handleCloseDeleteModal();
  };

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Ocorreu um erro: {'Erro desconhecido'}</div>;

  return (
    <div>
      <Head>
        <title>Alunos</title>
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8  flex flex-row justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Alunos</h1>
          <Link href="/alunos/new">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150">
              Cadastrar Novo Aluno
            </button>
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {data && data.students && data.students.length > 0 ? (
              <Table data={data.students} onEdit={handleOpenEditModal} onDelete={handleOpenDeleteModal} />
            ) : (
              <div className="flex flex-col items-center justify-center mt-8">
                <p className="text-gray-500 text-lg mb-4">Nenhum dado cadastrado ainda.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150">
                  <Link href="/alunos/new">Cadastrar Novo Aluno</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {editModalOpen && editItemId && (
        <EditModal isOpen={editModalOpen} onClose={handleCloseEditModal} id={editItemId} />
      )}

      {deleteModalOpen && deleteItemId && (
        <DeleteModal isOpen={deleteModalOpen} onClose={handleCloseDeleteModal} id={deleteItemId} onDelete={handleDeleteItem} />
      )}
    </div>
  );
};

HomePage.getLayout = (page: React.ReactNode) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default HomePage;
