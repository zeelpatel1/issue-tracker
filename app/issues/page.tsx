import React from 'react'
import {Button} from '@radix-ui/themes'
import Link from 'next/link'
import GetData from '../componetns/getData'

const IssuePage = () => {
  return (
    <div>
      <Button><Link href='/issues/new'>New Issue</Link></Button>
      <GetData/>
    </div>
  )
}

export default IssuePage
