type Props = {
  link: string
  prev_design_link: string
  next_design_link: string
}

const DesignLayout = ({
  children: content,
  link,
  prev_design_link,
  next_design_link,
}: React.PropsWithChildren<Props>) => (
  <div className="mx-auto flex h-screen flex-col justify-between px-20">
    <div className="">{content}</div>
    <div className="sticky bottom-0 flex justify-between bg-white p-4 shadow-inner">
      <div className="flex items-center gap-8">
        <a className="cursor-pointer" href={prev_design_link}>
          {"<"} Prev
        </a>
        <a className="cursor-pointer" href={next_design_link}>
          Next {">"}
        </a>
      </div>
      <div className="flex items-center gap-8">
        <div>
          <span>Made by </span>
          <a
            href="https://github.com/iamkacperwasik"
            target="_blank"
            className="font-semibold"
          >
            Kacper Wąsik
          </a>
        </div>
        <div>
          <a href={link} target="_blank">
            Dribble Design
          </a>
        </div>
        <div>
          <a
            href="https://github.com/iamkacperwasik/dribble-clones"
            target="_blank"
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default DesignLayout
