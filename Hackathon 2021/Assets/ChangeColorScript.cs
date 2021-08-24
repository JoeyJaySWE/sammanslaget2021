using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ChangeColorScript : MonoBehaviour
{
    Image[] img;

    void Start()
    {
        img = gameObject.GetComponentsInChildren<Image>();
    }

    public void ChangeToRandomColor()
    {
        var randomColor = new Color(Random.Range(0f, 1f), Random.Range(0f, 1f), Random.Range(0f, 1f));

        for (int i = 0; i < img.Length; i++)
        {
            img[i].color = randomColor;
        }
    }
}
