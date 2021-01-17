import { connect } from '../../Themes/OsmiProvider'

export default connect({
  pages: 'flex bg-primary items-center p-3',
  container: "row space-between items-center justify-end flex",
  wrapperDoted: "row flex",
  wraperNext: "flex items-end",
  dotedInActive: "border rounded-full w-10 h-10 border-white bg-white mx-1",
  logo: "w-100 h-25 mt-7",
  heroImage: "w-314 h-389",
  icNext: "w-40 h-40",
  dotedActive: "border rounded-full w-10 h-10 border-primary bg-secondary mx-1",
  mainTitle: "font-bold text-white text-5xl max-w-200 text-center my-7",
  bottomTitle: "font-regular text-md text-center text-white mt-5 max-w-300",
})