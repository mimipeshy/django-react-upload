from rest_framework import viewsets
from django.http import HttpResponse
from rest_framework.response import Response
from .serializer import FileUpload
from .models import BillerServicesUploads


class BillerServiceViewSet(viewsets.ModelViewSet):
    queryset = BillerServicesUploads.objects.all()
    serializer_class = FileUpload

    def post(self, request, *args, **kwargs):
        file_license = request.data['file_licence']
        file_signatories = request.data['file_signatories']
        file_collection = request.data['file_collection']
        created_on = request.data['created_on']
        created_by= request.data['created_by']
        BillerServicesUploads.objects.create(file_license=file_license, file_signatories=file_signatories,
                                             file_collection=file_collection,
                                             created_on=created_on,
                                             created_by=created_by)
        return HttpResponse({'message': 'Upload successful'}, status=201)

    def get(self, request, *args, **kwargs):
        posts = BillerServicesUploads.objects.all()
        serializer = FileUpload(posts, many=True)
        return Response(serializer.data)
