import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../../redux/Counter/counterSlice'
import styles from './Counter.module.less'

function Counter() {
  const navigate = useNavigate()
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const goDashboard = () => {
    navigate('/user/dashboard')
  }

  const goAdmin = () => {
    navigate('/admin/dashboard')
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          type="button"
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
      <Button onClick={goDashboard}>Link to Dashboard</Button>
      <Button onClick={goAdmin}>Link to Admin</Button>
    </div>
  )
}

export default Counter
