import ContentLoader from "react-content-loader"

export const CardSkeleton = ({ size = 200 }) => {
  return (
    <ContentLoader
      width={size}
      height={size}
      viewBox="0 0 450 400"
      backgroundColor="rgb(206, 206, 206)"
      foregroundColor="#dedede"
    >
      <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
      <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
      <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
    </ContentLoader>
  )
}
