import {google} from 'googleapis'

const GOOGLE_CLIENT_ID =  "884820764775-ie7h62q1cbvjp0ebpmblqarc690k6gj1.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET =  "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"

 const oauth2client =  new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    'postmessage'   //'http://localhost:3000/oauth2callback', 
)
export default oauth2client 