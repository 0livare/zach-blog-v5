type FormattedDateProps = {
  date: Date
}

export function FormattedDate(props: FormattedDateProps) {
  const {date} = props

  const dateStr = date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return <time dateTime={date.toISOString()}>{dateStr}</time>
}
