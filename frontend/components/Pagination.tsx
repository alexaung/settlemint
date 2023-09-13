import { useRouter } from "next/navigation";
import { updateSearchParams } from "@utils";
import CustomButton from "./CustomButton";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const router = useRouter();

  const navigateToPage = (pageNumber: number) => {
    const newPathname = updateSearchParams("page", `${pageNumber}`);
    router.push(newPathname);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const surroundingPages = 2; // number of pages to show before and after the current page

    // Previous button
    if (currentPage > 1) {
      buttons.push(
        <CustomButton
          key="prev"
          btnType="button"
          title="Previous"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={() => navigateToPage(currentPage - 1)}
        />
      );

      // Page number buttons
      for (
        let i = Math.max(1, currentPage - surroundingPages);
        i <= Math.min(totalPages, currentPage + surroundingPages);
        i++
      ) {
        buttons.push(
          <CustomButton
            key={i}
            btnType="button"
            title={i.toString()}
            containerStyles={`bg-primary-blue rounded-full text-white ${
              i === currentPage ? "active" : ""
            }`} // You can add styles for active page
            handleClick={() => navigateToPage(i)}
          />
        );
      }
    }

    // Ellipses and last page number
    if (currentPage + surroundingPages < totalPages) {
      buttons.push(<span key="ellipsis1">...</span>);
      buttons.push(
        <CustomButton
          key={totalPages}
          btnType="button"
          title={totalPages.toString()}
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={() => navigateToPage(totalPages)}
        />
      );
    }

    // Next button
    if (currentPage < totalPages) {
      buttons.push(
        <CustomButton
          key="next"
          btnType="button"
          title="Next"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={() => navigateToPage(currentPage + 1)}
        />
      );
    }

    return buttons;
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {renderPaginationButtons()}
    </div>
  );
};

export default Pagination;
