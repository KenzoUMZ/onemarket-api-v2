import * as Yup from 'yup';

export default interface ICreateMarketDTO {
    name: string
    cnpj: string
    location: string
    products: string
    thumbnail: string
}

export const MarketDTOValidation = Yup.object().shape({
    name: Yup.string().required('Field name is required'),
    cnpj: Yup.string().required('Field cnpj is required'),
    location: Yup.object({
        created: Yup.object().shape({
          mapping: Yup.object().shape({
            map: Yup.boolean(),
            defaultValue: Yup.string(),
            lat: Yup.string().when('map', {
              is: true,
              then: Yup.string().required('lat is required')
            }),
            long: Yup.string().when('map', {
              is: true,
              then: Yup.string().required('lat is required')
            })
          })
        })
      }),
    thumbnail: Yup.string().required('Field thumbnail is required')
})