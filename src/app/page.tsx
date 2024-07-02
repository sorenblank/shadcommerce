"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Menu } from "@/components/menu";
import { Sidebar } from "@/components/sidebar";
import Star from "@/assets/Star";
import HalfStar from "@/assets/HalfStar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface Product {
  id: number;
  name: string;
  description: string;
  previousPrice: number;
  currentPrice: number;
  discountPercentage: number;
  rating: number;
  category: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("featured");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]); // Default price range
  const [maxPrice, setMaxPrice] = useState(1000); // Default max price
  const productsPerPage = 6;

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data: { products: Product[] }) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        const uniqueCategories = Array.from(new Set(data.products.map(product => product.category)));
        setCategories(uniqueCategories);
        const highestPrice = Math.max(...data.products.map(product => product.currentPrice));
        setMaxPrice(highestPrice);
        setPriceRange([0, highestPrice]);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      (product.currentPrice >= priceRange[0] && product.currentPrice <= priceRange[1])
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategories, products, priceRange]);

  const sortProducts = (products: Product[]) => {
    switch (sortBy) {
      case "low":
        return [...products].sort((a, b) => a.currentPrice - b.currentPrice);
      case "high":
        return [...products].sort((a, b) => b.currentPrice - a.currentPrice);
      default:
        return products; // "featured" or any other case
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageCount = Math.ceil(sortedProducts.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceRangeChange = (values: [number, number]) => {
    setPriceRange(values);
  };

  return (
    <>
      <div className="block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
            <Sidebar 
                className="max-lg:w-[100vw] lg:block" 
                categories={categories}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                onPriceRangeChange={handlePriceRangeChange}
                maxPrice={maxPrice}
              />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <div className="space-between flex items-center">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Shop
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Showing {indexOfFirstProduct + 1}-
                        {Math.min(indexOfLastProduct, sortedProducts.length)} of{" "}
                        {sortedProducts.length} Products
                      </p>
                    </div>
                    <div className="ml-auto mr-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="shrink-0 px-4 py-2 rounded-md"
                          >
                            <CaretSortIcon className="w-4 h-4 mr-2 ml-0" />
                            Sort by:{" "}
                            {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[200px]" align="end">
                          <DropdownMenuRadioGroup
                            value={sortBy}
                            onValueChange={handleSortChange}
                          >
                            <DropdownMenuRadioItem value="featured">
                              Featured
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="low">
                              Price: Low to High
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="high">
                              Price: High to Low
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <Separator className="my-5" />
                  <div className="relative">
                    <div className="flex pb-4 flex-wrap justify-evenly">
                      {currentProducts.map((product: any) => (
                        <div
                          key={product.id}
                          className="flex flex-col mb-4 lg:mb-10"
                        >
                          <div className="w-72 h-72 justify-center flex flex-col items-center shrink-0 mb-2 overflow-hidden rounded-2xl cursor-pointer">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={288}
                              height={288}
                              className="rounded-xl"
                            />
                          </div>

                          <div className="text-black text-xl font-bold font-Inter mb-1 cursor-pointer">
                            {product.name}
                          </div>

                          <div className="flex flex-row gap-1 items-center mb-1">
                            {[...Array(Math.floor(product.rating))].map(
                              (_, i) => (
                                <Star key={i} />
                              )
                            )}
                            {product.rating % 1 !== 0 && <HalfStar />}
                            <div className="ml-2">
                              <span className="text-black text-sm font-medium font-Inter">
                                {product.rating.toFixed(1)}/
                              </span>
                              <span className="text-black/60 text-sm font-medium font-Inter">
                                5
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-row items-center">
                            <div className="text-black text-2xl font-bold font-Inter">
                              ${product.currentPrice}
                            </div>
                            <div className="text-black/40 text-2xl font-bold font-Inter line-through ml-3">
                              ${product.previousPrice}
                            </div>
                            <div className="w-[58px] h-7 px-3.5 py-1.5 bg-red-500/10 rounded-[62px] justify-center items-center gap-3 inline-flex ml-3">
                              <div className="text-red-500 text-xs font-medium font-Inter">
                                -{product.discountPercentage}%
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            handlePageChange(Math.max(1, currentPage - 1))
                          }
                          aria-disabled={currentPage === 1}
                          className={
                            currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>
                      {[...Array(pageCount)].map((_, index) => {
                        const page = index + 1;
                        if (
                          page === 1 ||
                          page === pageCount ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <PaginationItem
                              key={page}
                              className="cursor-pointer"
                            >
                              <PaginationLink
                                onClick={() => handlePageChange(page)}
                                isActive={currentPage === page}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return <PaginationEllipsis key={page} />;
                        }
                        return null;
                      })}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            handlePageChange(
                              Math.min(pageCount, currentPage + 1)
                            )
                          }
                          aria-disabled={currentPage === pageCount}
                          className={
                            currentPage === pageCount
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
