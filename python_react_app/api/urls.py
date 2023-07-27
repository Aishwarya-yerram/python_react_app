from django.urls import path
from .views import ArticleList, ArticleDetails

urlpatterns = [
    # path('articles/', article_list),
    # path('articles/<int:pk>/', article_details),
    path('articles/', ArticleList.as_view()),
    path('articles/<int:id>/', ArticleDetails.as_view())
]