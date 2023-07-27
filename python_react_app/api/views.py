from django.shortcuts import render, HttpResponse
from .serializers import ArticleSerializer
from .models import Article
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView


class ArticleList(APIView):

	def get(self, request):

		articles = Article.objects.all()
		serializer = ArticleSerializer(articles, many=True)
		return Response(serializer.data)

	def post(request):
		serializer = ArticleSerializer(data=request.data)

		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArticleDetails(APIView):
	def get_object(self, id):
		try:
			return Article.objects.get(id=id)

		except Article.DoesNotExists:
			return Response(status=status.HTTP_404_NOT_FOUND)

	def get(self, request, id):
		article = self.get_object(id)
		serializer = ArticleSerializer(article)
		return Response(serializer.data)

	def put(self, request, id):
		article = self.get_object(id)
		serializer = ArticleSerializer(article, data=request.data)

		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

	def delete(self, request, id):
		article = self.get_object(id)
		article.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)


# Create your views here.

'''
# function based views
@api_view(['GET', 'POST'])
def article_list(request):


	if request.method == 'GET':
		articles = Article.objects.all()
		serializer = ArticleSerializer(articles, many=True)
		return Response(serializer.data)

	elif request.method == 'POST':
		serializer = ArticleSerializer(data=request.data)

		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def article_details(request, pk):
	try:
		article = Article.objects.get(pk=pk)

	except Article.DoesNotExists:
		return Response(status=status.HTTP_404_NOT_FOUND)

	if request.method == 'GET':
		serializer = ArticleSerializer(article)
		return Response(serializer.data)

	elif request.method == 'PUT':
		serializer = ArticleSerializer(article, data=request.data)

		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

	elif request.method == 'DELETE':
		article.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)

	'''