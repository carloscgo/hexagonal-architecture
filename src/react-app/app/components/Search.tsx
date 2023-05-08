import { useState } from 'react';
import Turnstone from 'turnstone';
import { RiCloseCircleFill, RiSearch2Line } from 'react-icons/ri'
import { LIMIT } from '../utils/constants';
import { useTranslation } from '../utils/i18n';

const ServerApi = import.meta.env.VITE_API_SERVER;

const styles = {
  input: 'w-full h-[38px] border border-oldsilver-300 py-2 pl-10 text-xl outline-none rounded',
  inputFocus: 'w-full h-[38px] border-x-0 border-t-0 border-b border-crystal-500 py-2 pl-10 text-xl outline-none sm:rounded sm:border',
  query: 'text-oldsilver-800 placeholder-oldsilver-400',
  typeahead: 'text-crystal-500 border-white',
  cancelButton: `absolute w-10 h-10 inset-y-0 left-0 items-center justify-center z-1 text-crystal-600 inline-flex sm:hidden`,
  clearButton: 'absolute inset-y-0 right-0 w-8 inline-flex items-center justify-center text-crystal-500 hover:text-hotpink-300',
  listbox: 'absolute z-10 w-full bg-white sm:border sm:border-crystal-500 sm:rounded text-left sm:mt-2 p-2 sm:drop-shadow-xl',
  groupHeading: 'cursor-default mt-2 mb-0.5 px-1.5 uppercase text-sm text-hotpink-300',
  item: 'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-oldsilver-700',
  highlightedItem: 'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-oldsilver-700 rounded bg-crystal-100',
  match: 'font-semibold',
  noItems: 'cursor-default text-center my-20'
}

const listbox = [
  {
    id: 'products',
    name: 'Products',
    ratio: 3,
    displayField: 'name',
    data: (query: string) =>
      fetch(`${ServerApi}/products?q=${encodeURIComponent(query)}&_limit=${LIMIT}`)
        .then(response => response.json()),
    searchType: 'startswith'
  },
]

const Cancel = () => <RiCloseCircleFill size="16px" />

const Clear = () => <RiCloseCircleFill size="16px" />

export default function Search({ id, onSelect }: { id: string, onSelect: (data: any) => any | void}) {
  const { t } = useTranslation();

  const [hasFocus, setHasFocus] = useState(false)

  const containerStyles = hasFocus
    ? 'fixed block w-[100%] h-full top-0 left-0 bg-white z-1 overflow-auto relative sm:bg-transparent sm:overflow-visible'
    : 'relative w-[100%]'

  const iconDisplayStyle = hasFocus ? 'hidden text-crystal-600' : 'inline-flex text-oldsilver-400'

  const onBlur = () => setHasFocus(false)
  const onFocus = () => setHasFocus(true)

  return (
    <div className={containerStyles}>
      <span className={`absolute w-10 h-10 inset-y-0 left-0 items-center justify-center z-[3] sm:inline-flex ${iconDisplayStyle}`}>
        <RiSearch2Line size="18px" />
      </span>
      <Turnstone
        autoFocus={false}
        cancelButton={true}
        clearButton={true}
        debounceWait={250}
        id={id}
        listbox={listbox}
        listboxIsImmutable={true}
        matchText={true}
        maxItems={LIMIT}
        noItemsMessage={t('weFoundNoProducts')}
        onBlur={onBlur}
        onFocus={onFocus}
        onSelect={onSelect}
        placeholder={t('enterProductName')}
        styles={styles}
        Cancel={Cancel}
        Clear={Clear}
      />
    </div>
  )
}
