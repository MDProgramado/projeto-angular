export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo{
  id?: number | string
  vehicle?: string
  volumetotal?: number | string
  connected?: number | string
  softwareUpdates?: number | string
  img?: string
  lastUpdate?: string
}

export interface VeiculosData {

    id?:string
    vehicle?: string
    odometro?: string
    nivelCombustivel?: string
    status?:string
    lat?: string
    long?: string
}

