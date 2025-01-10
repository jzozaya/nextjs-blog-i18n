'use client'

import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import FeaturedLayout from '@/layouts/FeaturedLayout'
import HomeLayout from '@/layouts/HomeLayout'
// import { LocaleTypes } from './i18n/settings'

import { LocaleTypes } from 'app/[locale]/i18n/settings'


import { createTranslation } from 'app/[locale]/i18n/server'
import Link from 'next/link'
// import Audioplayer from '@/components/mdxcomponents/Audioplayer'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

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
          To build a dynamic, user-centric platform that streamlines the recruitment process for the advertising industry. This MVP will serve as a modern solution, empowering organizations to discover top talent and enabling candidates to showcase their skills and apply to relevant job opportunities.


        </p>
        <div className="max-w-2xl mt-10">
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
              <span>
                <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
              <span>
                <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non
                deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="flex-none mt-1 text-indigo-600 size-5" />
              <span>
                <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat
                auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
            fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
            adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
          </p>



          {/* Puzzle pieces */}


          <div className='flex flex-col my-16'>
            
            <SelectMenu />

            <br />
            <br />

            <SimpleTable />

            <br />
            <br />

            <ExampleTablePlans />

          </div>







          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-gray-900 text-pretty">
            From beginner to expert in 3 hours
          </h2>
          <p className="mt-6">
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
          </p>
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
        <div className="max-w-2xl mt-16">
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
        </div>
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
          defaultValue="Canada"
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



