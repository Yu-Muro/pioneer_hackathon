import os
import cv2
import random
import base64
import matplotlib
import numpy as np
import matplotlib.pyplot as plt


def scale_to_width(img, width):
    """幅が指定した値になるように、アスペクト比を固定して、リサイズする。
    """
    h, w = img.shape[:2]
    height = round(h * (width / w))
    dst = cv2.resize(img, dsize=(width, height))

    return dst

img = cv2.imread('hoge.jpg')
# img_hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
# plt.imshow(cv2.cvtColor(img_hsv, cv2.COLOR_HSV2RGB))

width = 100

dst = scale_to_width(img, width)
# img_hsv = cv2.cvtColor(dst, cv2.COLOR_BGR2HSV)
# plt.imshow(cv2.cvtColor(img_hsv, cv2.COLOR_HSV2RGB))


def make_img(picture_id, mileage):
    random.seed(picture_id)
    p = [k for k in range(len(dst)*len(dst[0]))]
    random.shuffle(p)
    for i in p[mileage:]:
        for k in range(3):
            dst[i // width][i % width][k] = 0
    cv2.imwrite('resize_img.jpg', dst)
    with open('resize_img.jpg', "rb") as f:
        img_base64 = base64.b64encode(f.read()).decode('utf-8')
    os.remove('resize_img.jpg')
    return img_base64

# img_hsv = cv2.cvtColor(dst, cv2.COLOR_BGR2HSV)
# plt.imshow(cv2.cvtColor(img_hsv, cv2.COLOR_HSV2RGB))
