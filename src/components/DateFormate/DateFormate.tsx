import React from 'react'

type Props = {
  time: number | Date | undefined;
}

const DateFormate = (time: Props) => {

  return (
    <div className="text-2xl font-medium">
      {/* {new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(time)} */}
      </div>
  )
}

export default DateFormate