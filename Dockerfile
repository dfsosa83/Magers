FROM jupyter/minimal-notebook

LABEL description="Mage data management platform"

ARG PIP=pip3

USER root

# Install some handful libraries like curl, wget, git, build-essential, zlib
RUN apt-get update && apt-get install -y --no-install-recommends software-properties-common && \
    add-apt-repository ppa:deadsnakes/ppa -y && \
    apt-get update && apt-get install -y --no-install-recommends \
        build-essential \
        ca-certificates \
        curl \
        wget \
        git \
        libopencv-dev \
        openssh-client \
        openssh-server \
        vim \
        zlib1g-dev \
        graphviz \
        yarn

# Install Python dependencies
COPY requirements.txt requirements.txt
RUN ${PIP} install -r requirements.txt

COPY . /home/jovyan/src

# Install Node version 17
RUN echo -e 'y' | conda install nodejs==17.9.0

# Install node modules used in front-end
RUN cd /home/jovyan/src/mage_ai/frontend && npm install -g npm@8.12.2

ENV PYTHONPATH="${PYTHONPATH}:/home/jovyan/src"
