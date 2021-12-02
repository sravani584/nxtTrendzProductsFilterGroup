import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          placeholder="Search"
          className="search-input"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCategory => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(eachCategory.categoryId)
      const isActive = eachCategory.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? 'category-name active-category-name'
        : 'category-name'

      return (
        <li
          className="category-item"
          key={eachCategory.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  const renderRatingsFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {activeRatingId, changeRating} = props
      const onChangeRatingItem = () => changeRating(eachRating.ratingId)
      const isActive = eachRating.ratingId === activeRatingId

      const ratingClassName = isActive ? 'and-up active-rating' : 'and-up'

      return (
        <li
          className="rating-item"
          key={eachRating.ratingId}
          onClick={onChangeRatingItem}
        >
          <img
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingFilters()}
      <button
        type="button"
        className="clear-filters-button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
