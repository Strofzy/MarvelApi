import Service from '../_generic/generic.service'
import { ModuleEntity } from './comics.types'

const ComicsService = new class extends Service<ModuleEntity> {
    constructor () {
        super('comics')
    }
}()

export default ComicsService

