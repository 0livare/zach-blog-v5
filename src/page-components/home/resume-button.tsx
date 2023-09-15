import {Button} from '~/components'

export function ResumeButton() {
  return (
    <div className="flex justify-center">
      <Button
        className="text-white mt-12 min-w-[200px]"
        href="/zach-olivare-resume-2023.pdf"
        download
      >
        View resumé
      </Button>
    </div>
  )
}
