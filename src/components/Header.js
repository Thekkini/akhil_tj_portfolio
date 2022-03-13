import { Link } from 'react-router-dom';

/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { navigation, contact } from '../data';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='top-0 z-50 min-h-full'>
        <Disclosure as='nav' className='firefox:bg-opacity-90 '>
          {({ open }) => (
            <>
              <div className='mx-auto px-[16px] xl:px-[160px]'>
                <div className='flex h-16 items-center justify-between'>
                  <Link to='/'>
                    <div className='flex-shrink-0'>
                      <p className='text-[16px] font-semibold  text-myBlue	'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          width='24'
                          height='24'
                        >
                          <path fill='none' d='M0 0h24v24H0z' />
                          <path d='M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77L21 1zm-9 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z' />
                        </svg>
                      </p>
                    </div>
                  </Link>

                  <div className='hidden xl:block'>
                    <div className=' flex  items-baseline '>
                      <div className='flex gap-16'>
                        <a
                          href='/'
                          className='button text-[16px] font-semibold uppercase text-myBlue transition delay-100 ease-in-out hover:text-myRed active:text-myRed'
                        >
                          Home
                        </a>
                        <a
                          href='/about'
                          className='button text-[16px] font-semibold uppercase text-myBlue transition delay-100 ease-in-out hover:text-myRed active:text-myRed'
                        >
                          About
                        </a>
                        <a
                          href='/'
                          className='button flex items-center gap-2 text-[16px] font-semibold uppercase text-myBlue transition delay-100 ease-in-out hover:text-myRed active:text-myRed'
                        >
                          Contact
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            width='24'
                            height='24'
                          >
                            <path fill='none' d='M0 0h24v24H0z' />
                            <path
                              d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z'
                              fill='rgba(246,73,13,1)'
                              className='group-hover:fill-myLight'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='flex z-50 xl:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                      className=' inline-flex items-center justify-center rounded-lg p-2  text-myBlue '
                    >
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='absolute xl:hidden'>
                <div className='space-y-1 bg-myLight  px-2 pt-2 pb-3 sm:px-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-[16px] font-semibold text-myBlue',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <p className='button text-[16px] font-semibold text-myBlue transition delay-100 ease-in-out hover:text-myRed active:text-myRed'>
                        {item.name}
                      </p>
                    </Disclosure.Button>
                  ))}
                  {contact.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900  text-white'
                          : 'text-[16px]  font-semibold text-myBlue',
                        'block rounded-md  px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <a
                        href='/'
                        className='button flex items-center gap-2 text-[16px] font-semibold text-myBlue transition delay-100 ease-in-out hover:text-myRed active:text-myRed'
                      >
                        {item.name}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          width='24'
                          height='24'
                        >
                          <path fill='none' d='M0 0h24v24H0z' />
                          <path
                            d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z'
                            fill='rgba(246,73,13,1)'
                            className='group-hover:fill-myLight'
                          />
                        </svg>
                      </a>
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
