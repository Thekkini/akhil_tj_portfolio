import { Link } from 'react-router-dom';

/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { navigation } from '../data';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  // const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // console.log(isActive);

  // const componentDidMount = () => {
  //   document.body.style.overflow = 'hidden';
  // };

  // const componentWillUnmount = () => {
  //   document.body.style.overflow = 'visible';
  // };

  // const scrollAlower = () => {
  //   if (isOpen === true) {
  //     componentDidMount();
  //   } else if (isOpen === false) {
  //     componentWillUnmount();
  //   }
  // };

  // scrollAlower();
  // setIsActive(false);

  return (
    <>
      <div className='sticky  top-0 z-50 min-h-full'>
        <Disclosure
          as='nav'
          className='firefox:bg-opacity-90 bg-myLight bg-opacity-30 backdrop-blur backdrop-filter'
        >
          {({ open }) => (
            <>
              <div className='mx-auto px-[16px] lg:px-[160px]'>
                <div className='flex h-16 items-center justify-between'>
                  <Link to='/'>
                    <div className='flex-shrink-0'>
                      <p className='text-myBlue text-[16px]  font-semibold	'>
                        AKHIL_TJ
                      </p>
                    </div>
                  </Link>

                  <div className='hidden lg:block'>
                    <div className=' flex  items-baseline '>
                      <div className='flex gap-16'>
                        <a
                          href='/'
                          className='text-myBlue hover:text-myRed active:text-myRed text-[16px] font-semibold transition delay-100 ease-in-out'
                        >
                          Home
                        </a>
                        <a
                          href='/about'
                          className='text-myBlue hover:text-myRed active:text-myRed text-[16px] font-semibold transition delay-100 ease-in-out'
                        >
                          About
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className=' flex lg:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                      className=' text-myBlue inline-flex items-center justify-center rounded-lg p-2 '
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

              <Disclosure.Panel className='lg:hidden'>
                <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-myBlue text-[16px] font-semibold',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
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
