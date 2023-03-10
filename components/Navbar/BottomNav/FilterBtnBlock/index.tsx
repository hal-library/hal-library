import LeftFilBtn from './LeftFilBtn'
import RightFilBtn from './RightFilBtn'
import { css } from '@emotion/react'
import { SetBookData } from '../../../../types/SetBookData'
import { useState } from 'react'

const styles = {
    filBtnBlock: css`
      display: flex;
  `,

  filBtnLeftBlock: css`
    display: flex;
    gap: 10px;
    @media screen and (max-width: 680px) {
      gap: 1px;
    }
  `,

  filBtnRightBlock: css`
    margin-left: 10px;
  `,
}

const FilterBtnBlock = ({setBookData}: SetBookData) => {
  const [filterContents, setFilterContents] = useState<string>("")
  const [filterContentsTheme, setFilterContentsTheme] = useState<string>("すべて")
  const arrContentsTheme = ["すべて", "新着本", "HAL", "MODE", "ISEN", "NK管理部"]

  return (
    <div css={styles.filBtnBlock}>
      <div css={styles.filBtnLeftBlock}>
        {arrContentsTheme.map((contentsTheme, index) => (
          <LeftFilBtn
            key={index}
            contents={contentsTheme}
            setBookData={setBookData}
            filterContentsTheme={filterContentsTheme}
            setFilterContentsTheme={setFilterContentsTheme}
            filterContents={filterContents}
          />
        ))}
      </div>
      <div css={styles.filBtnRightBlock}>
        <RightFilBtn
          contents="禁帯出"
          setBookData={setBookData}
          filterContentsTheme={filterContentsTheme}
          setFilterContents={setFilterContents}
        />
      </div>
    </div>
  )
}

export default FilterBtnBlock
