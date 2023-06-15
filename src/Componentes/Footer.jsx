import { Fragment } from 'react'

import Styles_C from './Styles_C/Footer.module.css'

export function Footer() {
  return (
    <Fragment>
        <h2 className={Styles_C['Copyright']}>

          Copyright Santiago Pérez Puerta 2023

        </h2>
    </Fragment>
  )
}

export default Footer