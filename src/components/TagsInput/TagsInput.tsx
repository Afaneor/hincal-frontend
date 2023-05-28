import { Tag, Typography } from 'antd'
import clsx from 'clsx'
import { get } from 'lodash'
import React from 'react'
import type { FCC } from 'src/types'

import styles from './style.module.scss'

const { Text } = Typography

interface TagsInputProps {
  list: string[]
  onClick: (e: any) => void
  tagOnCLose?: (item: string | Record<string, any>) => void
  placeholder?: string
  singleLine?: boolean
  listItemsNameKey?: string
  hasError?: boolean
}
export const TagsInput: FCC<TagsInputProps> = ({
  tagOnCLose,
  onClick,
  list,
  placeholder = '',
  singleLine,
  listItemsNameKey,
  hasError,
}) => {
  const placeholderText = placeholder || 'Выбрать...'
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={clsx(
        styles.tagsInput,
        singleLine ? styles.overflowScroll : '',
        hasError ? styles.hasError : ''
      )}
      onClick={onClick}
    >
      {!list?.length ? (
        <Text type='secondary'>{placeholderText}</Text>
      ) : (
        list?.map((item: any) => (
          <Tag
            closable={!!tagOnCLose}
            key={item?.id || item}
            onClose={() => tagOnCLose?.(item)}
          >
            {listItemsNameKey ? get(item, listItemsNameKey, undefined) : item}
          </Tag>
        ))
      )}
    </div>
  )
}

TagsInput.displayName = 'TagsInput'

export default TagsInput
