import { Metadata } from 'next'
import Tag from '@/components/tag'
import tagData from 'app/[locale]/tag-data.json'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from '../i18n/server'
import { LocaleTypes } from '../i18n/settings'
import SectionContainer from '@/components/SectionContainer'

type TagsProps = {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: TagsProps): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'SEO')
  return genPageMetadata({
    title: 'Tags',
    description: t('tags'),
    params: { locale: locale },
  })
}

export default function Page({ params: { locale } }: TagsProps) {
  const tagCounts = tagData[locale]
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <>
      <SectionContainer>
        <div className='mt-20 lg:mt-40'>
          <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
            <div className="pt-6 pb-8 space-x-2 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-heading-400 dark:text-heading-400 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
                Tags
              </h1>
            </div>
            <div className="flex flex-wrap max-w-lg">
              {tagKeys.length === 0 && 'No tags found.'}
              {sortedTags.map((tag) => (
                <div key={tag} className="mt-2 mb-2 mr-5">
                  <Tag text={tag} />
                  <span className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300">
                    {`(${tagCounts[tag]})`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
