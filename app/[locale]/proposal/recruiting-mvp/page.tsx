'use client'

import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import FeaturedLayout from '@/layouts/FeaturedLayout'
import HomeLayout from '@/layouts/HomeLayout'
// import { LocaleTypes } from './i18n/settings'

import { LocaleTypes } from 'app/[locale]/i18n/settings'


import { createTranslation } from 'app/[locale]/i18n/server'
import Link from 'next/link'
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

import { Radio, RadioGroup } from '@headlessui/react'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'



type HomeProps = {
  params: { locale: LocaleTypes }
}

export default async function Page({ params: { locale } }: HomeProps) {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const filteredPosts = posts.filter((p) => p.language === locale)
  const hasFeaturedPosts = filteredPosts.filter((p) => p.featured === true)
  const { t } = await createTranslation(locale, 'home')

  return (
    <div className="px-6 py-32 bg-white lg:px-8">
      <div className="max-w-3xl mx-auto text-gray-700 text-base/7">
        <p className="font-semibold text-indigo-600 text-base/7">Introduction</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl">
          Overview
        </h1>
        <p className="mt-6 text-xl/8">
          Build a dynamic, user-centric platform that streamlines the recruitment process for the advertising industry. This MVP will serve as a modern solution, empowering organizations to discover top talent and enabling candidates to showcase their skills and apply to relevant job opportunities.
        </p>
        <div className="max-w-2xl mt-10">
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
            Goals
          </h2>

          <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
              <span>
                <strong className="font-semibold text-gray-900">Simple:</strong> A user-friendly interface for both organizations and talent.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
              <span>
                <strong className="font-semibold text-gray-900">Intuitive:</strong> Seamless job posting and application management.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
              <span>
                <strong className="font-semibold text-gray-900">Scalable:</strong> Built to grow with your needs, allowing the integration of new features and capabilities as your business evolves.
              </span>
            </li>
          </ul>


          <br />
          <div className="max-w-2xl mt-16">
            <p className="font-semibold text-indigo-600 text-base/7">Project Breakdown</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
              Time Estimate
            </h2>

            <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
              {[
                {
                  title: "Project Setup & Planning (1 week)",
                  details: [
                    "Set up the development environment.",
                    "Design core user flows (wireframes/mockups) using components from Tailwind UI.",
                    "Define database schema for Supabase (users, job postings, applications, etc.).",
                  ],
                },
                {
                  title: "Organizations Module (2 weeks)",
                  details: [
                    "Dashboard for organizations:",
                    "Job posting creation and editing.",
                    "List of active/inactive job postings.",
                    "Basic candidate management."
                  ],
                },
                {
                  title: "Authentication & Authorization (1 week)",
                  details: [
                    "Implement user registration/login with Supabase.",
                    "Role-based access (e.g., organization vs. talent)."
                  ],
                },
                {
                  title: "Stripe Integration (1 week)",
                  details: [
                    "Set up Stripe for handling payments.",
                    "Implement business logic for organizations."
                  ],
                },
                {
                  title: "Talent Module (2 weeks)",
                  details: [
                    "Profile creation and editing.",
                    "Job search and filtering.",
                    "Application submission and history tracking."
                  ],
                },
                {
                  title: "Notifications & Messaging (Optional) (1 week)",
                  details: [
                    "Email notifications for job updates or applications.",
                    "Basic messaging between organizations and talent (if included in MVP)."
                  ],
                },
                {
                  title: "UI/UX Design & Refinement (Ongoing: ~1 week)",
                  details: [
                    "Build responsive, visually appealing layouts using Tailwind components.",
                    "Iterative UI/UX adjustments based on feedback."
                  ],
                },
                {
                  title: "Testing & Deployment (1 week)",
                  details: [
                    "End-to-end testing for both user roles.",
                    "Fixing bugs and deploying on Vercel or similar platform."
                  ],
                }
              ].map((section, idx) => (
                <li key={idx} className="flex flex-col gap-y-3">
                  <h3 className="font-semibold text-gray-900">{section.title}</h3>
                  <ul className="pl-6 space-y-2 list-disc">
                    {section.details.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>


            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
              Look and Feel
            </h2>

            {/* Puzzle pieces */}
            <div className='flex flex-row justify-between flex-1 max-w-sm my-16'>
              <SelectMenu />

              {/* <SelectMenu /> */}
            </div>

            <div className='flex flex-col my-16'>
              <SimpleTable />
              {/* <ExampleTablePlans /> */}
            </div>

            <div className='flex flex-col my-16'>
              <ExamplePeople />
            </div>




            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
              Cost Estimate
            </h2>
            <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
              {/* <li className="flex gap-x-3">
                <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
                <span>
                  <strong className="font-semibold text-gray-900">Hourly Rate Consideration:</strong> For a skilled full-stack developer, rates range from $50–$150 (USD).
                </span>
              </li> */}
              <li className="flex gap-x-3">
                <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
                <span>
                  <strong className="font-semibold text-gray-900">Cost Breakdown:</strong>
                  <ul className="pl-6 space-y-2 list-disc">
                    <li>Low Range: $85,000–$95,000 (streamlined with minimal features).</li>
                    <li>Mid Range: $100,000–$135,000 (polished MVP with core features).</li>
                    <li>High Range: $200,000+ (for advanced features like messaging).</li>
                  </ul>
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
                <span>
                  <strong className="font-semibold text-gray-900">Factors Impacting Time & Cost:</strong>
                  <ul className="pl-6 space-y-2 list-disc">
                    <li>Feature complexity, such as advanced analytics.</li>
                    <li>Custom UI/UX components.</li>
                    {/* <li>Revisions and testing needs.</li>
                    <li>Third-party integrations (e.g., external APIs).</li> */}
                  </ul>
                </span>
              </li>
            </ul>
          </div>


          <p className="mt-8">
            This platform aims to redefine how the advertising industry connects employers and talent, offering a modern, efficient, and engaging recruitment experience that sets the stage for successful collaborations.
          </p>



          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
            Scope of Work
          </h2>

          <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
              <span>
                <strong className="font-semibold text-gray-900">Phase 1.</strong> to be defined based on the project requirements and specifications.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
              <span>
                <strong className="font-semibold text-gray-900">Pahse 2.</strong> to be defined.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
              <span>
                <strong className="font-semibold text-gray-900">Phase 3.</strong> to be defined.
              </span>
            </li>
          </ul>


          {/* <br />
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
            Look and Feel
          </h2> */}






          {/* <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
            Phase 1
          </h2>
          <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>

          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
            Phase 2
          </h2>
          <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p> */}







          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
            {/* From beginner to expert in 3 hours */}
            Agentic Research Flow
          </h2>
          {/* <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                tristique.”
              </p>
            </blockquote>
            <figcaption className="flex mt-6 gap-x-4">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="flex-none rounded-full size-6 bg-gray-50"
              />
              <div className="text-sm/6">
                <strong className="font-semibold text-gray-900">Maria Hill</strong> – Marketing Manager
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p> */}
        </div>
        <figure className="mt-16">
          <img
            alt=""
            src="https://res.cloudinary.com/dbtnomqnj/image/upload/v1736465734/portfolio/Agentic_Research_Flow_ub013o.jpg"
            className="object-cover aspect-video rounded-xl bg-gray-50"
          />
          <figcaption className="flex mt-4 text-gray-500 gap-x-2 text-sm/6">
            {/* <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" /> */}
            Agentic Research Flow.
          </figcaption>
        </figure>
        {/* <div className="max-w-2xl mt-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
            Everything you need to get up and running
          </h2>
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
            amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
            Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
            ac. Cras fermentum convallis quam.
          </p>
          <p className="mt-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div> */}
      </div>
    </div>
  )
}


const publishingOptions = [
  { title: 'Published', description: 'This job posting can be viewed by anyone who has the link.', current: true },
  { title: 'Draft', description: 'This job posting will no longer be publicly accessible.', current: false },
]

function SelectMenu() {
  const [selected, setSelected] = useState(publishingOptions[0])

  return (
    <div>
      <label htmlFor="location" className="block font-medium text-gray-900 text-sm/6">
        Location
      </label>
      <div className="grid grid-cols-1 mt-2">
        <select
          id="location"
          name="location"
          defaultValue="Mexico"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        {/* <ChevronDownIcon
          aria-hidden="true"
          className="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4"
        /> */}
      </div>
    </div>
  )


}

const plans = [
  { name: 'Startup', priceMonthly: '$29', priceYearly: '$290', limit: 'Up to 5 active job postings', selected: true },
  {
    name: 'Business',
    priceMonthly: '$99',
    priceYearly: '$990',
    limit: 'Up to 25 active job postings',
    selected: false,
  },
  {
    name: 'Enterprise',
    priceMonthly: '$249',
    priceYearly: '$2490',
    limit: 'Unlimited active job postings',
    selected: false,
  },
]

function SimpleTable() {
  return (
    <fieldset aria-label="Pricing plans" className="relative -space-y-px bg-white rounded-md">
      {plans.map((plan) => (
        <label
          key={plan.name}
          aria-label={plan.name}
          aria-description={`${plan.priceMonthly} per month, ${plan.priceYearly} per year, ${plan.limit}`}
          className="group flex cursor-pointer flex-col border border-gray-200 p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md focus:outline-none has-[:checked]:relative has-[:checked]:border-indigo-200 has-[:checked]:bg-indigo-50 md:grid md:grid-cols-3 md:pl-4 md:pr-6"
        >
          <span className="flex items-center gap-3 text-sm">
            <input
              defaultValue={plan.name}
              defaultChecked={plan.selected}
              name="pricing-plan"
              type="radio"
              className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
            />
            <span className="font-medium text-gray-900 group-has-[:checked]:text-indigo-900">{plan.name}</span>
          </span>
          <span className="pl-1 ml-6 text-sm md:ml-0 md:pl-0 md:text-center">
            <span className="font-medium text-gray-900 group-has-[:checked]:text-indigo-900">
              {plan.priceMonthly} / mo
            </span>{' '}
            <span className="text-gray-500 group-has-[:checked]:text-indigo-700">({plan.priceYearly} / yr)</span>
          </span>
          <span className="ml-6 pl-1 text-sm text-gray-500 group-has-[:checked]:text-indigo-700 md:ml-0 md:pl-0 md:text-right">
            {plan.limit}
          </span>
        </label>
      ))}
    </fieldset>
  )
}


const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
]

function ExamplePeople() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="relative flex justify-between py-5">
          <div className="flex pr-6 gap-x-4 sm:w-1/2 sm:flex-none">
            <img alt="" src={person.imageUrl} className="flex-none rounded-full size-12 bg-gray-50" />
            <div className="flex-auto min-w-0">
              <p className="font-semibold text-gray-900 text-sm/6">
                <a href={person.href}>
                  <span className="absolute inset-x-0 bottom-0 -top-px" />
                  {person.name}
                </a>
              </p>
              <p className="flex mt-1 text-gray-500 text-xs/5">
                <a href={`mailto:${person.email}`} className="relative truncate hover:underline">
                  {person.email}
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-4 sm:w-1/2 sm:flex-none">
            <div className="hidden sm:block">
              <p className="text-gray-900 text-sm/6">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-gray-500 text-xs/5">
                  Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none p-1 rounded-full bg-emerald-500/20">
                    <div className="size-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-gray-500 text-xs/5">Online</p>
                </div>
              )}
            </div>
            <ChevronRightIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
          </div>
        </li>
      ))}
    </ul>
  )
}




const plansTwo = [
  { name: 'Hobby', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD disk', price: '$40' },
  { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD disk', price: '$80' },
  { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD disk', price: '$160' },
  { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD disk', price: '$240' },
]

function ExampleTablePlans() {
  const [selectedTwo, setSelectedTwo] = useState(plansTwo[0])

  return (
    <fieldset aria-label="Server size">
      <RadioGroup value={selectedTwo} onChange={setSelectedTwo} className="space-y-4">
        {plansTwo.map((options) => (
          <Radio
            key={options.name}
            value={options}
            aria-label={options.name}
            aria-description={`${options.ram}, ${options.cpus}, ${options.disk}, ${options.price} per month`}
            className="group relative block cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600 sm:flex sm:justify-between"
          >
            <span className="flex items-center">
              <span className="flex flex-col text-sm">
                <span className="font-medium text-gray-900">{options.name}</span>
                <span className="text-gray-500">
                  <span className="block sm:inline">
                    {options.ram} / {options.cpus}
                  </span>{' '}
                  <span aria-hidden="true" className="hidden sm:mx-1 sm:inline">
                    &middot;
                  </span>{' '}
                  <span className="block sm:inline">{options.disk}</span>
                </span>
              </span>
            </span>
            <span className="flex mt-2 text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
              <span className="font-medium text-gray-900">{options.price}</span>
              <span className="ml-1 text-gray-500 sm:ml-0">/mo</span>
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-600"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  )
}



