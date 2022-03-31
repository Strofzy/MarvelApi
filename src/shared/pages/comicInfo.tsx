import { ComicDetailView } from 'core/comicInfo/comicInfo.components'

const comicInfo = () => {

    return (
        <ComicDetailView />
    )
}
comicInfo.path = '/comicInfo/:id'
comicInfo.useLayout = true

export default comicInfo
