import LocalStorageSchemaApi from './implementations/localStorage'
import ServerStorageSchemaApi from './implementations/serverStorage'
// const api = new LocalStorageSchemaApi()
const api = new ServerStorageSchemaApi()
export default api
