import axios from 'axios';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Result } from './generic.types'
import { API_URL } from '../../lib/constant';

const Service = class <T = any> {
    private service: string

    constructor (service: string) {
        this.service = service
        this.get = this.get.bind(this)
        this.findAll = this.findAll.bind(this)
        this.findByParams = this.findByParams.bind(this)
    }

    async get (id?: number | string) {
        if (!id) return
        const res = await axios.get<Result<T>>(API_URL(`${ this.service }/${ id }`))
        return res.data
    }

    async findAll (params?: any) {
        const res = await axios.get<Result<T[]>>(API_URL(this.service), { params })
        return res.data
    }

    async findByParams (params?:any) {
        const res = await axios.get<Result<T[]>>(API_URL(this.service))
        return res.data
    }
}

export default Service
