import { AppDataSource } from '@infra/data/datasource'
import { DataSource, EntityTarget, Repository } from 'typeorm'

export class DataSourceSingleton {
    private static instance: DataSourceSingleton
    dataSource: DataSource 
    private constructor() {
        this.dataSource = null
    }
    
    public static getInstance(): DataSourceSingleton {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance;
    }

    public static getRepositoy<T>(E: EntityTarget<T>): Repository<T> {
        return this.getInstance().getDbInstance().getRepository(E)
    }

    public getDbInstance(): DataSource {
        this.dataSource = AppDataSource()
        if (!this.dataSource.isInitialized) {
            this.dataSource.initialize().then(() => console.log('connected again?'))
        }

        return this.dataSource
    }
}
