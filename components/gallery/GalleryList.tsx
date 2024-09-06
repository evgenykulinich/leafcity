import GalleryCard from '@/components/gallery/GalleryCard'

export const GalleryList = ({ generationImages, projectsImages }) => {
  return (
    <div className="mt-8 flex cursor-default flex-col gap-4 text-center text-xl lg:mt-12 lg:flex-row lg:text-2xl">
      <GalleryCard
        className="border-green bg-green/10 hover:bg-green/20"
        screenshots={generationImages}
        preview={`${process.env.NEXT_PUBLIC_API_URL}/fs/images/gallery/generation/Ini_ga-1`}
        title="Генерация мира"
        icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2N2M5NjAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWVhcnRoIj48cGF0aCBkPSJNMjEuNTQgMTVIMTdhMiAyIDAgMCAwLTIgMnY0LjU0Ii8+PHBhdGggZD0iTTcgMy4zNFY1YTMgMyAwIDAgMCAzIDNhMiAyIDAgMCAxIDIgMmMwIDEuMS45IDIgMiAyYTIgMiAwIDAgMCAyLTJjMC0xLjEuOS0yIDItMmgzLjE3Ii8+PHBhdGggZD0iTTExIDIxLjk1VjE4YTIgMiAwIDAgMC0yLTJhMiAyIDAgMCAxLTItMnYtMWEyIDIgMCAwIDAtMi0ySDIuMDUiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg=="
        color="green"
      />
      <GalleryCard
        className="border-blue bg-blue/10 hover:bg-blue/20"
        screenshots={projectsImages}
        preview={`${process.env.NEXT_PUBLIC_API_URL}/fs/images/gallery/projects/list_tw-1`}
        title="Постройки и геймплей"
        icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZTlmZDIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBpY2theGUiPjxwYXRoIGQ9Ik0xNC41MzEgMTIuNDY5IDYuNjE5IDIwLjM4YTEgMSAwIDEgMS0zLTNsNy45MTItNy45MTIiLz48cGF0aCBkPSJNMTUuNjg2IDQuMzE0QTEyLjUgMTIuNSAwIDAgMCA1LjQ2MSAyLjk1OCAxIDEgMCAwIDAgNS41OCA0LjcxYTIyIDIyIDAgMCAxIDYuMzE4IDMuMzkzIi8+PHBhdGggZD0iTTE3LjcgMy43YTEgMSAwIDAgMC0xLjQgMGwtNC42IDQuNmExIDEgMCAwIDAgMCAxLjRsMi42IDIuNmExIDEgMCAwIDAgMS40IDBsNC42LTQuNmExIDEgMCAwIDAgMC0xLjR6Ii8+PHBhdGggZD0iTTE5LjY4NiA4LjMxNGExMi41MDEgMTIuNTAxIDAgMCAxIDEuMzU2IDEwLjIyNSAxIDEgMCAwIDEtMS43NTEtLjExOSAyMiAyMiAwIDAgMC0zLjM5My02LjMxOSIvPjwvc3ZnPg=="
        color="blue"
      />
    </div>
  )
}
