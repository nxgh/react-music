import React, { FC, ReactElement } from "react"

export interface IColumn<RecordType, key extends keyof RecordType> {
  title?: string
  key: key
  width?: string
  render: (value: any, record: RecordType, index?: number) => string | ReactElement
}
interface IProps<RecordType> {
  columns: IColumn<RecordType, keyof RecordType>[]
  data: RecordType[]
}

const Table = <T extends Record<string, any> = any>({
  columns,
  data,
}: IProps<T>) => {

  const { length } = columns

  const defaultWidth = { width: `${(100 / length).toFixed(2)}%` }

  return (
    <div className="w-full">
      <div className="flex w-full">
        {columns.find(item => item.title !== '')
          ? columns?.map(({ title, width }, index) => (
            <div key={index} style={width ? { width } : defaultWidth} className="p-1 text-gray-500">
              {title}
            </div>
          ))
          : ''}
      </div>
      <div className="flex">
        {data?.length ? (
          <div className="flex flex-col border border-l-0 border-r-0 w-full cursor-pointer">
            {data.map((item, index) => (
              <div key={index} className="flex  w-full border-t first:border-t odd:bg-gray-50">
                {columns?.map(({ key, render, width }, idx) => (
                  <div key={idx} style={width ? { width } : defaultWidth} className=" p-1 first:border-l-0 last:border-r-0">
                    {render(item[key], item)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
            <div>暂无数据</div>
          )}
      </div>
    </div>
  )
}

export default Table