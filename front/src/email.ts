import emailjs from '@emailjs/browser'

const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

export const sendEmail = async (formData: { [key: string]: FormDataEntryValue }) => {

    if ([...Object.values(formData)].some(x => x === '')) {
        throw new Error('Please fill all fields!')
    }

    if (serviceID && templateID) {
        try {
            await emailjs.send(serviceID, templateID, formData, publicKey)
            return true
        } catch (err: any) {
            throw new Error('...Ooops something went wrong. Please try again later!')
        }
    }
}