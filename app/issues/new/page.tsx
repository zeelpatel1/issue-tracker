"use client";

import { TextField, Button, TextArea, Callout } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useState } from 'react';


type IssueForm = {
    title: string,
    description: string
}

const NewIssuePage = () => {

    const router = useRouter()
    const [error, setError] = useState('')
    const { register, control, handleSubmit } = useForm<IssueForm>()

    return (
        <div className='max-w-xl '>
            {error && <Callout.Root color='red' className='mb-5'>
                <Callout.Text>{error}</Callout.Text>
                </Callout.Root>}
            
            <form onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.post('/api/issues', data)
                    router.push('/issues')
                } catch (error) {
                    setError('Error has occured')
                }
            })} className='space-y-3'>

                <TextField.Root placeholder='Title' {...register('title')}></TextField.Root>

                <TextArea placeholder='description' {...register('description')} />
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}

export default NewIssuePage
