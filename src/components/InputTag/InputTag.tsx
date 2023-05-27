import { Input, message, Tag, Tooltip } from 'antd'
import type { BaseSyntheticEvent, ChangeEvent, FC } from 'react'
import React, { useRef, useState } from 'react'

// import 'antd-tag-input/dist/style.css'
import styles from './InputTag.module.scss'

type InputTagProps = {
  className?: string
  style?: React.CSSProperties
  placeholder?: string
  value: string[]
  closable?: boolean
  onChange?: (value: string[]) => void
  tagOnClose?: (item: any) => void
  onClick?: (e: BaseSyntheticEvent) => void
}

const InputTag: FC<InputTagProps> = ({
  value = [],
  onChange,
  placeholder,
  closable,
  ...props
}) => {
  const [content, setContent] = useState<string>()
  const inputRef = useRef<typeof Input>(null)

  const handleDelete = (tag: string) => {
    const newArr = value.filter((i) => i !== tag)
    onChange?.(newArr)
    message.destroy()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const handleBlur = () => {
    if (content) {
      if (value.includes(content)) {
        message.warning(`[tag: ${content}] already exists`)
        return
      }
      onChange?.([...value, content])
      setContent('')
    }
  }

  // 避免触发表单提交
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === 'Enter' && e.preventDefault()

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && content) {
      if (value.includes(content)) {
        message.warning(`[tag: ${content}] already exists`)
        return
      }
      onChange?.([...value, content])
      setContent('')
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={`${styles.antInputCustom} ${styles.tagInput} ant-input`}
      // @ts-ignore
      onClick={() => inputRef.current?.focus()}
      {...props}
    >
      {value.map((item) =>
        item.length > 20 ? (
          <Tooltip title={item} key={item}>
            <Tag
              closable={closable}
              onClose={() => handleDelete(item)}
              // onClose={() => tagOnClose?.(item)}
            >{`${item.slice(0, 20)}...`}</Tag>
          </Tooltip>
        ) : (
          <Tag closable key={item} onClose={() => handleDelete(item)}>
            {item}
          </Tag>
        )
      )}
      <Input
        // @ts-ignore
        ref={inputRef}
        bordered={false}
        placeholder={!value.length ? placeholder : ''}
        value={content}
        className={styles.input}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
      />
      {/* TODO: доделать функционал очищения */}
      {/* <span */}
      {/*  className={`${styles.clear} ant-input-suffix`} */}
      {/*  onClick={(e) => { */}
      {/*    e.stopPropagation() */}
      {/*    handleClear() */}
      {/*  }} */}
      {/* > */}
      {/*  <span */}
      {/*    role='button' */}
      {/*    aria-label='close-circle' */}
      {/*    // tabIndex="-1" */}
      {/*    className='anticon anticon-close-circle ant-input-clear-icon' */}
      {/*  > */}
      {/*    <svg */}
      {/*      viewBox='64 64 896 896' */}
      {/*      focusable='false' */}
      {/*      className='' */}
      {/*      data-icon='close-circle' */}
      {/*      width='1em' */}
      {/*      height='1em' */}
      {/*      fill='currentColor' */}
      {/*      aria-hidden='true' */}
      {/*    > */}
      {/*      <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z' /> */}
      {/*    </svg> */}
      {/*  </span> */}
      {/* </span> */}
    </div>
  )
}

export default InputTag
