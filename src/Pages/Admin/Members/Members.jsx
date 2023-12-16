import './Members.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const MembersAdmin = () => {
    return (
        <div className='form'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '20ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="name"
                        label="Name"
                        variant='standard'
                    />
                    <TextField
                        required
                        id="role"
                        label="Role"
                        variant='standard'
                    />
                    <TextField
                        required
                        id="designation"
                        label="Designation"
                        variant='standard'
                    />
                    <TextField
                        id="number"
                        label="Number"
                        variant='standard'
                    />
                    <TextField
                        id="mail"
                        label="Mail"
                        variant='standard'
                    />
                </div>
                <div>
                    <TextField
                        id="address"
                        label="Address"
                        variant='standard'
                    />
                    <TextField
                        id="imgPath"
                        label="Image Link"
                        variant='standard'
                    />
                    <TextField
                        id="Linkedin"
                        label="Linkedin"
                        variant='standard'
                    />
                    <TextField
                        id="gScholar"
                        label="Google Scholar"
                        variant='standard'
                    />
                    <TextField
                        id="github"
                        label="Github"
                        variant='standard'
                    />
                </div>
            </Box>
        </div>
    )
}

export default MembersAdmin