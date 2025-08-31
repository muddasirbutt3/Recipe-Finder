function useSearchText(search) {
  return search.replace(" ", "-")
}

export default useSearchText;