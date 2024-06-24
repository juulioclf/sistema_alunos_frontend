import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  registration: string;
  firstName: string;
  lastName: string;
  email: string;
};

type FormProps = {
  onSubmit: (data: FormData) => void;
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="space-y-4">
        <label htmlFor="registration" className="block text-sm font-medium text-gray-700">
          Matrícula
        </label>
        <input
          id="registration"
          {...register('registration', { required: true })}
          type="text"
          autoComplete="off"
          className={`block w-full px-3 py-2 border ${errors.registration ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        />
        {errors.registration && <span className="text-red-500 text-sm">Campo obrigatório</span>}
      </div>
      
      <div className="space-y-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          Primeiro Nome
        </label>
        <input
          id="firstName"
          {...register('firstName', { required: true })}
          type="text"
          autoComplete="off"
          className={`block w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        />
        {errors.firstName && <span className="text-red-500 text-sm">Campo obrigatório</span>}
      </div>

      <div className="space-y-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Sobrenome
        </label>
        <input
          id="lastName"
          {...register('lastName', { required: true })}
          type="text"
          autoComplete="off"
          className={`block w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        />
        {errors.lastName && <span className="text-red-500 text-sm">Campo obrigatório</span>}
      </div>

      <div className="space-y-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          {...register('email', { required: true })}
          type="email"
          autoComplete="off"
          className={`block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        />
        {errors.email && <span className="text-red-500 text-sm">Campo obrigatório</span>}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
};

export default Form;
