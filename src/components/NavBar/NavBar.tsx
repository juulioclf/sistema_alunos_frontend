import 'tailwindcss/tailwind.css';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Fragment, useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    const navigation = [
        { name: 'Home', link_to: '/home' },
        { name: 'Alunos', link_to: '/alunos' }
    ];
    const profile = ['Your Profile', 'Settings'];

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }: any) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-8 w-8"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.link_to}
                                                className={classNames(
                                                    router.pathname === item.link_to
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">View notifications</span>
                                        {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                    </button>

                                    <Menu as="div" className="ml-3 relative">
                                        {({ open }: any) => (
                                            <>
                                                <div>
                                                    <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                        <span className="sr-only">Open user menu</span>
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items
                                                        static
                                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                    >
                                                        {profile.map((item) => (
                                                            <Menu.Item key={item}>
                                                                {({ active }: any) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                        <Menu.Item>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-gray-700"
                                                            >
                                                                Sign out
                                                            </a>
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </>
                                        )}
                                    </Menu>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden"></div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link_to}
                                    className={classNames(
                                        router.pathname === item.link_to
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="flex items-center px-5">
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none text-white">{user?.name}</div>
                                    <div className="text-sm font-medium leading-none text-gray-400">{user?.email}</div>
                                </div>
                                <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">View notifications</span>
                                    {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                </button>
                            </div>
                            <div className="mt-3 px-2 space-y-1">
                                {profile.map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                        {item}
                                    </a>
                                ))}
                                <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                >
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
