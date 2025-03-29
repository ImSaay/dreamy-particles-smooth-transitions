
import { useEffect, useState } from "react";
import { Star, StarHalf, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

// Mock database for reviews (simulating Firebase)
const reviewsData: Review[] = [
  {
    id: "1",
    name: "Ricardo Silva",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Shadow AC transformou completamente minha experiência com o ar condicionado. A proteção é incrível e o suporte técnico sempre presente quando preciso.",
    date: new Date(2023, 5, 10).toISOString(),
  },
  {
    id: "2",
    name: "Ana Ferreira",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4.5,
    text: "Desde que instalei o Shadow AC, minha conta de energia diminuiu significativamente e o ar condicionado está funcionando melhor do que nunca.",
    date: new Date(2023, 6, 15).toISOString(),
  },
  {
    id: "3",
    name: "João Mendes",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "O investimento valeu muito a pena. A tecnologia do Shadow AC realmente prolonga a vida útil do meu aparelho.",
    date: new Date(2023, 7, 3).toISOString(),
  },
  {
    id: "4",
    name: "Carla Rodrigues",
    avatar: "https://i.pravatar.cc/150?img=10",
    rating: 4,
    text: "O aplicativo é incrível e me permite controlar tudo remotamente. A interface é intuitiva e fácil de usar.",
    date: new Date(2023, 8, 22).toISOString(),
  },
  {
    id: "5",
    name: "Paulo Marques",
    avatar: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    text: "Shadow AC oferece tranquilidade. Sei que meu equipamento está protegido e funcionando com eficiência máxima o tempo todo.",
    date: new Date(2023, 9, 5).toISOString(),
  }
];

const ReviewSection = () => {
  const { t } = useLanguage();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const reviewsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  // Simulate fetching reviews from a database
  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      // In a real app, this would be a Firebase or other API call
      setTimeout(() => {
        setReviews(reviewsData);
        setIsLoading(false);
      }, 800); // Simulate network delay
    };
    
    fetchReviews();
  }, []);
  
  const displayedReviews = reviews.slice(
    currentPage * reviewsPerPage, 
    (currentPage + 1) * reviewsPerPage
  );
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="text-yellow-400 fill-yellow-400" size={18} />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="text-yellow-400 fill-yellow-400" size={18} />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-gray-300" size={18} />);
    }
    
    return stars;
  };
  
  return (
    <section id="testimonials" className="py-20 px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t("testimonials")}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Veja o que nossos clientes estão dizendo sobre o Shadow AC Premium
        </p>
        
        {isLoading ? (
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-purple/30 border-t-purple-light animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {displayedReviews.map((review) => (
                <div
                  key={review.id}
                  className="review-card"
                >
                  <div className="review-meta">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{review.name}</h4>
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/90 mb-4">{review.text}</p>
                  <small className="text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                  </small>
                </div>
              ))}
            </div>
            
            {/* Pagination Controls */}
            <div className="flex justify-center space-x-4 items-center">
              <button 
                className={`p-2 rounded-full ${
                  currentPage === 0 
                    ? 'text-muted-foreground cursor-not-allowed' 
                    : 'hover:bg-muted text-foreground'
                }`}
                onClick={goToPrevPage}
                disabled={currentPage === 0}
              >
                <ChevronLeft size={24} />
              </button>
              
              <span className="text-muted-foreground">
                {currentPage + 1} / {totalPages}
              </span>
              
              <button 
                className={`p-2 rounded-full ${
                  currentPage >= totalPages - 1 
                    ? 'text-muted-foreground cursor-not-allowed' 
                    : 'hover:bg-muted text-foreground'
                }`}
                onClick={goToNextPage}
                disabled={currentPage >= totalPages - 1}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
