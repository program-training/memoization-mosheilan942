import React, {FC, memo} from 'react'
import PropTypes from 'prop-types'

type Props = {
    onClick: () => void;
    children: string
}

const Chiled: FC<Props> = ({onClick, children}) => {
    
    
  return (
    <>
    <button onClick={onClick}>{children}</button>
    </>
  )
}

Chiled.propTypes = {}

export default memo(Chiled)
